import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import {
    AgentRuntime,
    elizaLogger,
    validateCharacterConfig,
    stringToUuid,
    composeContext,
    generateMessageResponse,
    ModelClass
} from "@ai16z/eliza";

import { REST, Routes } from "discord.js";
import { DirectClient } from ".";

export function createApiRouter(agents: Map<string, AgentRuntime>, client: DirectClient) {
    const router = express.Router();

    router.use(cors({
        origin: 'http://localhost:5174', // Your frontend URL
        methods: ['GET', 'POST'],
        credentials: true
    }));
    router.use(bodyParser.json());
    router.use(bodyParser.urlencoded({ extended: true }));

    router.get("/", (req, res) => {
        res.send("Welcome, this is the REST API!");
    });

    router.get("/hello", (req, res) => {
        res.json({ message: "Hello World!" });
    });

    router.get("/api/agents", (req, res) => {
        const agentList = Array.from(agents.values()).map(agent => ({
            id: agent.agentId,
            name: agent.character.name
        }));
        res.json(agentList);
    });

    router.get("/api/agents/:agentId", (req, res) => {
        const agent = agents.get(req.params.agentId);
        if (!agent) {
            res.status(404).json({ error: 'Agent not found' });
            return;
        }
        res.json({
            id: agent.agentId,
            name: agent.character.name
        });
    });

    return router;
}
