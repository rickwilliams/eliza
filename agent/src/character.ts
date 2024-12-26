import fs from "fs";
import { Character, ModelProviderName, defaultCharacter, Clients } from "@ai16z/eliza";
import { bootstrapPlugin } from "@ai16z/plugin-bootstrap";
import { webSearchPlugin } from "@ai16z/plugin-web-search";
import { solanaPlugin } from "@ai16z/plugin-solana";
//import { fluxPlugin } from "./plugin-flux/index.js";
import { brainPlugin } from "./plugins/brain";

export const character: Character = {
    ...defaultCharacter,
    // For Twitter Client
    username: "D3g3neral",
    // Add clients as we go
    clients: [Clients.TWITTER],
    // Maybe we go local eventually?
    modelProvider: ModelProviderName.ANTHROPIC,
    //Add plugins to the character
    plugins: [bootstrapPlugin,
        webSearchPlugin,
        //solanaPlugin,
        //fluxPlugin,
        brainPlugin
        ]
}