import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

type Agent = {
    id: string;
    name: string;
};

export default function Agents() {
    const { data: agents, isLoading, error } = useQuery<Agent[]>({
        queryKey: ['agents'],
        queryFn: async () => {
            const res = await fetch('http://localhost:3001/api/agents');
            if (!res.ok) {
                throw new Error('Failed to fetch agents');
            }
            return res.json();
        }
    });

    if (isLoading) {
        return <div className="flex items-center justify-center h-screen">Loading agents...</div>;
    }

    if (error) {
        return <div className="flex items-center justify-center h-screen">Error loading agents</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Available Agents</h1>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {agents && agents.length > 0 ? (
                    agents.map((agent) => (
                        <div key={agent.id} className="border rounded-lg p-4">
                            <h2 className="text-xl font-semibold mb-2">{agent.name}</h2>
                            <div className="space-x-2">
                                <Button asChild>
                                    <Link to={`/${agent.id}/chat`}>Chat</Link>
                                </Button>
                                <Button asChild variant="outline">
                                    <Link to={`/${agent.id}/character`}>View Character</Link>
                                </Button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-span-full text-center text-muted-foreground">
                        No agents available
                    </div>
                )}
            </div>
        </div>
    );
}
