import { useEffect, useState } from "react";

const url = "https://jsonplaceholder.typicode.com/users";
interface User {
    id: number;
    name: string;
    email: string;
}
export function Users() {
    const [users, setUsers] = useState<User[]>([]);
    useEffect(() => {
        async function load() {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("hibás adatbetöltés")
                }
                const data = await response.json() as User[];
                setUsers(data);
            }
            catch (error) {
                if (error instanceof Error) {
                    console.error(error);
                }
            }
        }
        load();
    }, [])
    return (
        <>
            <h2>Felhasználólista</h2>
            <ul>
                {users.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </>
    )
}