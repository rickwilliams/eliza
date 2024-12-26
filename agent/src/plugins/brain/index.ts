import { Plugin } from "@ai16z/eliza";
import { BrainEvaluator } from "./evaluators.ts";
import { BrainProvider } from "./providers.ts";
import { extractKnowledgeAction } from "./actions.ts";

export const brainPlugin: Plugin = {
    name: "brain-plugin",
    description: "Enhances agent's knowledge based on conversation context",
    actions: [extractKnowledgeAction],
    evaluators: [BrainEvaluator],
    providers: [BrainProvider],
    services: []
};
