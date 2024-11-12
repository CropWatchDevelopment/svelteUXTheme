export class Ability {
    #name: string;
    constructor(
        name: string,
        webhook: string,
    ) {
        this.#name = name;
    }
    get name(): string {
        return this.#name;
    }
}