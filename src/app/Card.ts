export class Card{
   
    public  name:string
    public location: string
    public src:string 
    public headersrc:string
    public description:string
    public map:string
    
    constructor (  name:string,
         location: string,
         src:string ,
         headersrc:string,
         description:string,
         map:string
                )  {
                    this.name       = name
                    this.location=location
                    this.src=src
                    this.headersrc=headersrc
                    this.description=description
                    this.map=map
                  }
    
    }