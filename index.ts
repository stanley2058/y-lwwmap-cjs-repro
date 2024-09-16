import * as Y from "yjs";
import { LWWMap } from "y-lwwmap";

const doc = new Y.Doc();
const arr = doc.getArray<{ key: string; val: string }>("test");
const map = new LWWMap(arr);

map.set("hello", "world");

console.log(map.get("hello"));
