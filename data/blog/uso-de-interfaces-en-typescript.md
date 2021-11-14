---
title: Uso de interfaces en typescript
date: '2021-11-14'
tags: ['TypeScript']
draft: false
summary: Aprende sobre las interfaces en typescript, como utilizarla, definirlas y como nos ayudan en la rápida visualización de posibles errores en el desarrollo.
images: ['/static/images/interfaces-en-typescript.png']
layout: PostLayout
authors: ['default']
---

Una de las grandes utilidades de [TypeScript](/tags/typescript) es la definición de tipos estáticos. Las interfaces son una de esas herramientas nos brinda el lenguaje para la definición de tipos personalizados.

## Definición de interfaces

Para declarar una interfaz en typescript, utilizar la palabra clave `interface` seguida del nombre.

```ts
interface NombreInterfaz {
  // Definición de propiedades
}
```

Dentro de llaves, se definen las propiedades de la interfaz.

```ts
interface Person {
  name: string
  surname: string
  secondSurname?: string
  age?: number
}
```

## Propiedades opcionales

Para especificar que una propiedad de la interfaz es opcional, usar el signo de interrogación `?` al final del nombre de la propiedad. Todas las demás son obligatorias.

## Tipado de variables usando interfaces

Ya creada la interfaz podemos usarla para tipar las variables. Ya sea en otras interfaces, en variables, clases o funciones.

Para añadir tipos en typescript se añade `:` después del nombre de la variable.

```ts
const nombre: Person = {
  name: 'Geordano',
  surname: 'Polanco',
}
```

Está variable es de tipo `Person`, cualquier otro valor será marcado como error por el compilador de typescript.

## Tipando funciones en una interfaz

Podemos añadir tipos a las funciones de una interfaz, para garantizar que cualquier función definida dentro de una interfaz será usada con la firma adecuada.

```ts
// Usando arrow function - expresion
interface PersonFullName {
    (person; Person) => string
}
// o bien por declaración
interface PersonFullName {
    (person: Person): string
}
```

Podemos tipar variables de tipo `PersonFullName` con una función que reciba una variable de tipo `Person` y devuelva un string.

```ts
const getFullName: PersonFullName = (person: Person) => {
  return `${person.name} ${person.surname}`
}
```

Si el valor de retorno o el parámetro que recibe la función es distinto al tipado de la interfaz, el compilador marcará el error.

## Extender interfaces en typescript

En la programación orientada a objetos, es posible extender interfaces para componer otras interfaces más complejas.

Por ejemplo, tengo una `interfase` Base, que contiene las propiedades comunes de varias entidades.

```ts
interface Base {
  id: number
}
```

Extendemos la interfaz `Person` utilizando la interfaz `Base`.

```ts
interface Person extends Base {
  name: string
  surname: string
  secondSurname?: string
  age?: number
}
```

Además de extender otras interfaces, podemos extender una interfaz con una clase.

## Implementar una interface en typescript

Al igual que la mayoría de los lenguajes de programación con tipado fuerte, en typescript podemos implementar interfaces en las clases.

Para implementar una interfaz, utilizamos la palabra reservada `implements`

```ts
class Person implements Base {
  id: number
  name: string
  surname: string
  secondSurname?: string
  age?: number

  getFullName(): string {
    return `${this.name} ${this.surname} ${this.secondSurname}`
  }
}
```

Al implementar una interfaz en una clase, typeScript obliga a añadir todas las sus propiedades.

## Interfaces genéricas

En ocaciones para ir más allá en la reutilización de interfaces, podemos utilizar interfaces genéricas. Esto nos permite recibir uno o varios tipos de datos que serán utilizados en el interior de la interfaz.

```ts
interface GenericInterface<T> {
  // Definición de propiedades
} // T es un tipo genérico
```

Imagina una interfaz que contiene una función que retorna una lista de tipo `T`.

```ts
interface GenericList<T> {
  getList(): T[]
}
```

De esta forma podemos añadir una lógica en la función `getList` que siempre retorne una lista con el tipo genérico que definimos en la interfaz.

Hay muchas formas de sacar partido a esta gran fucnonalidad.

## Conclusión

Las interface son de gran ayuda en timpo de desarrollo, nos ayudan a restringir el tipo de datos que asignamos a una variable. Sí, es más trabajo, pero nos ayuda a evitar errores en el desarrollo.

**Referencia**

- [typescriptlang](https://www.typescriptlang.org/docs/handbook/interfaces.html)
