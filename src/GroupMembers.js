// GroupMembers.js

import React, { useState, useEffect } from 'react';
import { PublicClientApplication, useMsal } from '@azure/msal-react'; // Importer useMsal depuis @azure/msal-react
import { callMsGraph, getUsersInGroup } from './graph';

const GroupMembers = () => {
    const { accounts } = useMsal(); // Utiliser useMsal pour accéder aux comptes MSAL
    const [groups, setGroups] = useState([]);
    const [loading, setLoading] = useState(true);
    const msalConfig = {
        auth: {
            clientId: "28d12a17-a923-463b-82f5-44f339f30ee2",
            authority: "https://login.microsoftonline.com/14972d2d-25b3-4794-8db2-fd88da12a782",
        },
    };
    const [pca, setPca] = useState(null);

    useEffect(() => {
        // Initialize MSAL
        const initializeMsal = async () => {
            try {
                const msalInstance = new PublicClientApplication(msalConfig);
                await msalInstance.handleRedirectPromise(); // Gérer la redirection s'il y en a
                setPca(msalInstance);
            } catch (error) {
                console.error("Error initializing MSAL:", error);
            }
        };

        initializeMsal();
    }, []);

    useEffect(() => {
        const fetchGroups = async () => {
            if (!pca || !accounts || !accounts.length) return; // Vérifier si accounts est défini et non vide

            setLoading(true);
            try {
                const account = accounts[0]; // Supposer qu'un seul compte est connecté
                const response = await pca.acquireTokenSilent({
                    scopes: [
                        "GroupMember.Read.All",
                        "Directory.Read.All",
                        "Directory.ReadWrite.All",
                        "Group.Read.All",
                        "Group.ReadWrite.All",
                    ],
                    account: account,
                });
                const accessToken = response.accessToken;

                // Utiliser la fonction callMsGraph pour récupérer les données de l'utilisateur
                const userData = await callMsGraph(accessToken);
                console.log('User data:', userData);

                // Utiliser la fonction getUsersInGroup pour récupérer les membres du groupe
                const usersInGroup = await getUsersInGroup(accessToken, 'groupId');
                console.log('Users in group:', usersInGroup);

            } catch (error) {
                console.error("Error fetching groups:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchGroups();
    }, [pca, accounts]);

    return (
        <div>
            <h2>Groups</h2>

            <ul>
                {groups.map((group) => (
                    <li key={group.id}>{group.displayName}</li>
                ))}
            </ul>
        </div>
    );
};

export default GroupMembers;
