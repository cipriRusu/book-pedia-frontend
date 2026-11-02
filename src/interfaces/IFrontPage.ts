export interface IFrontPage {
    "topHeader": string;
    "header": string;
    "frontPageBody": string;
    "cards": IFrontPageCard[];
}

export interface IFrontPageCard {
    primary_key: string;
    title: string;
    content: string;
    footer: string;
}

export interface IArticle {
    primary_key: string;
    title: string;
    description: string;
    footer: string;
}