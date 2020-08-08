
export interface IEvent {
    eventName: string
    description: string
    dateTime: Date
    clubName: string
    cost: number
    location: string
    membershipRequired: boolean
    keywords: string[]
}

export const eventTemplate: IEvent = {
    eventName: "WDCC x AUCS Hack Weekend",
    description: "Learn it, code it, win it",
    dateTime: new Date("9th August, 2020"),
    clubName: "WDCC",
    cost: 0,
    location: "Grid AKL, New Zealand",
    membershipRequired: true,
    keywords: ["Code", "React", "JavaScript"]
};
