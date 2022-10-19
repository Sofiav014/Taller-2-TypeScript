
export class Serie {
    id: number;
    name: string;
    channel: string;
    season: number;
    summary: string;
    link: string;
    image: string;
  
    constructor(id: number, name: string, channel: string, season: number, summary: string, link: string, image: string) {
      this.id = id;
      this.name = name;
      this.channel = channel;
      this.season = season;
      this.summary = summary;
      this.link = link;
      this.image = image;

    }
}
  