---
title: "GO first impressions"
---

GO seems a very straightforward language, that's how it looks to me when I read GO code.

Seems for me that I need less steps to get things done, and I like that.

## Variable declaration

```go
var a int // that way you declare a variable with a type int
var a int = 1 // that way you declare a variable with a type int and assign a value
var a = 1 // that way you declare a variable and assign a value of type int
a := 1 // that way you declare a variable and assign a value of type int
```

## Functions

```go
func add(a int, b int) int {
    return a + b
}
```

In go, the main function doesn't return anything, so it doesn't have a return type. It is the entry point of the program.

```go
func main() {}
```

## Modules

Modules are like GO manages dependencies. The code you write is a module, and you can import other modules.

That's why go has a `go.mod` file, to manage those project informations (dependencies, module name, go version).

Here's an example of a `go.mod` file:

```go
module github.com/your-username/your-module-name

go 1.21.1

require (
    github.com/google/uuid v1.3.1 // indirect
)
```

`github.com` and other domains can be used to download modules, that's why you see them in the module name.

If you upload you module to github and you want to use it in another project, you can do it like this:

```bash
go get github.com/your-username/your-module-name
```

That's how you install a module with go.

## Packages

Packages are like folders, they are used to organize your code.

So you can import those packages in `go` files and use them. Those packages are also accessible from other modules.

For example, if you have a package called `usevim` in your project, and you now want to use it in another project, you can do with the module path, i.e:

```go
import "github.com/your-username/your-module-name/usevim"
```

And that goes one for whatever path your package is in.

## Naming conventions

In GO, if a function starts with a capital letter, it means that it is exported, and can be used outside of the package.

Otherwise, it is private and can only be used inside the package.

Besides it is very simple, you might have to get used to it if you come from almost any other language.

## Structs

Structs are like classes in other languages, but they don't have methods.

```go
type Person struct {
    name string
    age int
}
```

One thing I've found very useful is that you can create a struct defining json tags, and then you can use it to parse json.

```go
import (
    "encoding/json"
)

type Person struct {
    Name string `json:"name"`
    Age int `json:"age"`
}

func main() {
    var person Person
    json.Unmarshal([]byte(`{"name": "John", "age": 30}`), &person) // it will parse the json and assign the values to the struct
    // following, of couse, the json tags
}
```

## Interfaces

Interfaces are like in other languages, but you don't have to explicitly say that a struct implements an interface.

```go
import "fmt" // this is a built-in package btw

type Person interface {
    GetName() string // this is the method signature
}

type PersonImpl struct {
    name string
}

func (p PersonImpl) GetName() string { // this is the method
    return p.name
}

func main() {
    var person Person = PersonImpl{name: "John"}
    fmt.Println(person.GetName()) // prints "John"
}
```

If you add more structs that implement the `Person` interface, you can understand better how good this is and how it works.

## Errors

GO error handling is very simple, you check for the error and decide what to do if you find one.

```go
func main() {
    _, err := os.Open("file.txt")
    if err != nil {
        fmt.Println("Error opening file")
    }
}
```

This is like destructuring in javascript, you get the error value and assign it to the `err` variable.

In case there's no error, `err` will be `nil`. That's way there's jokes about `nil` everywhere in GO.

And btw, you can use `_` to ignore a return value. It's handy cause you can use that in import statements too.

```go
import (
    _ "github.com/your-username/your-module-name/usevim"
)
```

That way go will not complain about unused imports.

## Pointers

```go
func main() {
    var a int = 1
    var b *int = &a // b is a pointer to a
    fmt.Println(b) // prints the memory address of a
    fmt.Println(*b) // prints the value of a
}
```

## Arrays

```go
func main() {
    var a [2]int // array of 2 ints
    a[0] = 1
    a[1] = 2
    fmt.Println(a) // prints [1 2]
}
```

## Notes

There are a lot of things that I didn't cover here, so if you want to really learn more about GO, see the references below.

## References

- [Go by example](https://gobyexample.com) - This is a very good resource for a quick start
- [Go docs](https://golang.org/doc)
