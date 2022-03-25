export class Filme {
    constructor(
    public items: any[],
    public original_title: string,
    public title: string, 
    public poster_path: ImageData,
    public release_date: Date
    ) 
    {}
}