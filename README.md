## Differences between 'interface' and 'type' in TypeScript

- interface is used without '=' (equal sign) but type is used with '=' (equal sign)
```typescript
// An object structure initializer named Person with interface
interface Person {
    name: string;
    email: string;
    age: number;
    height: number;
    weight: number;
    hobbies: string[];
}

// An object structure initializer named Person with type
type Person = {
    name: string;
    email: string;
    age: number;
    height: number;
    weight: number;
    hobbies: Array<string>;
}
```
- Interface is used for initializing only the structure of an object. On the other hand, type is used as the initializer for any type of data

```typescript
// using type, we can make structure for any kind of data
type A = string
type B = number
type C = boolean
type D = []
type E = {}

// using interface, we can just make structure only for objects
interface Obj {
    // .....
}
```