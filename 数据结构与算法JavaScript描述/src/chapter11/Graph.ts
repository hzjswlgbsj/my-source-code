// import Vertex, { IVertex } from './Vertex';
interface IGraph {
  vertices: number; // 顶点数量
  edges: number; // 边数量
  adj: any[]; // 邻接表数组
  addEdge: (v: any, w: any) => void;
  showGraph: () => void;
}

// 图
export class Graph implements IGraph {
  public vertices: number = 0;
  public edges: number = 0;
  public adj: any[] = [];

  constructor(v: number) {
    this.vertices = v;
    for (let i = 0; i < this.vertices; i++) {
      this.adj[i] = [];
      // this.adj[i].push('')
    }
  }
  public addEdge(v: any, w: any) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
    console.log('111111111', JSON.parse(JSON.stringify(this.adj)), v, w)
  }

  public showGraph() {
    for (let i = 0; i < this.vertices; i++) {
      let log = `${i} -> `
      for (let j = 0; j < this.adj[i].length; j++) {
        if (typeof this.adj[i][j] !== undefined) {
          log += `${this.adj[i][j]} ` 
        }
      }
      console.log(log)
    }
  }
}