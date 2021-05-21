// import Vertex, { IVertex } from './Vertex';
interface IGraph {
  vertices: number; // 顶点数量
  edges: number; // 边数量
  adj: any[]; // 邻接表数组
  marked: any[]; // 标识是否被访问过
  addEdge: (v: any, w: any) => void;
  showGraph: () => void;
  dfs: (v: any) => void;
}

// 图
export class Graph implements IGraph {
  public vertices: number = 0;
  public edges: number = 0;
  public adj: any[] = [];
  public marked: any[] = [];

  constructor(v: number) {
    this.vertices = v;
    for (let i = 0; i < this.vertices; i++) {
      this.adj[i] = [];
      this.marked[i] = false;
    }
  }
  public addEdge(v: any, w: any) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
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

  public dfs(v: any, cb?: (v: any) => void) {
    this.marked[v] = true;
    if (this.adj[v] !== undefined) {
      if (typeof cb === 'function') {
        cb(v)
      } else {
        console.log(`Visited vertex: ${v}`)
      }
    }

    for (let i = 0; i < this.adj[v].length; i++) {
      const w = this.adj[v][i];
      if (!this.marked[Number(w)]) {
        this.dfs(w, cb);
      }
    }
  }
}