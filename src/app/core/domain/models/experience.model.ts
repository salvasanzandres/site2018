export class Experience{
  public id: number;
  public title: string;
  public description: string;
  public images: string[];
  public cols: number;
  public rows: number;
  public color: string;
}

export const EXPERIENCES: Experience[]=[
  {
    'id':1,
    'title':'hello title',
    'description':'this is desc',
    'images':['src/pepa.jpg'],
    'cols': 1,
    'rows': 1,
    'color':"white"
  },
  {
    'id':2,
    'title':'hello title 2',
    'description':'this is desc2',
    'images':['src/pepa.jpg'],
    'cols': 1,
    'rows': 1,
    'color':"white"
  },
  {
    'id':3,
    'title':'hello title 2',
    'description':'this is desc2',
    'images':['src/pepa.jpg'],
    'cols': 2,
    'rows': 1,
    'color':"white"
  },
  {
    'id':4,
    'title':'hello title 2',
    'description':'this is desc2',
    'images':['src/pepa.jpg'],
    'cols': 2,
    'rows': 2,
    'color':"white"
  },
  {
    'id':5,
    'title':'hello title 2',
    'description':'this is desc2',
    'images':['src/pepa.jpg'],
    'cols': 2,
    'rows': 1,
    'color':"white"
  }
]
