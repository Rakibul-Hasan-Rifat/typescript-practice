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


## An example of Union and Intersection types in TypeScript

### Union
```typescript
interface Person {
    name: string;
    age: number;
    weight: number;
    height: number;
}

interface Woman {
    married?: boolean;
    husband?: {
        name: string;
        age: number;
    }
}

const woman: Person | Woman = {
    name: 'Ayesha',
    age: 23,
    weight: 49,
    height: 4.3,
    married: true,
    husband: {
        name: "Abdullah",
        age: 28,
    }
}
```
In this example, 2 types (Person and Woman) are union. It is allowed that any of both is skipped.

### Intersection
```typescript
interface Person {
    name: string;
    age: number;
    weight: number;
    height: number;
}

interface Man {
    married?: boolean;
    wife?: {
        name: string;
        age: number;
    }
}

const woman: Person & Man = {
    name: 'Ayesha',
    age: 23,
    weight: 49,
    height: 4.3,
    married: true,
    wife: {
        name: "Sultana",
        age: 22,
    }
}
```
In this example, 2 types (Person and Man) are intersected. So, it is not allowed that any of both is skipped.