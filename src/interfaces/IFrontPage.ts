export interface IFrontPage {
    "topHeader": string;
    "header": string;
    "frontPageBody": string;
    "cards": IFrontPageCard[];
}

export interface IFrontPageCard {
    title: string;
    content: string;
    footer: string;
}