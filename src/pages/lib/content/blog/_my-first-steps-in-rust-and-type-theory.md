---
title: "Exploring Type Theory and Rust in my Learning Journey"
publishedAt: "2023-05-26"
summary: "Embarking on my journey of exploring Type Theory and the Rust programming language."
---

*This is all taken from study notes of mine. I'm not an expert in Rust or Type Theory, so if you find any mistake, please let me know.*

## Type Theory

In general, Type Theory is the study of type systems, encompassing a vast and extensive subject. In this post, we will delve into some smaller topics that are included within it.

So, what are types? Essentially, types are groups created to define the expected behavior of values. To illustrate, consider the group **int**. Values belonging to the **int** group cannot be concatenated as **strings**. Therefore, we expect the following operation: `"hello world" + 1` to throw an error.

Programming languages can be categorized as either dynamically or statically typed. Dynamic typed languages perform type-checking at runtime, while static typed languages do so at compile time.

### Type Systems

A Type System consists of a set of rules, known as **judgements**, which define the safe behaviors of typed values. These rules aim to assign a type $t$ to an expression $e$. Symbolically, we can write it as $\vdash e : t$. The Greek letter $\vdash$ before the expression is called a turnstile. In this context, it signifies that $e$ follows $t$.

### Inference and Type Environments

Inference is the process of deducing the type of an expression. For example, a type of a variable can be inferred by the type of the value assigned to it. It's necessary to keep track of the variables's types as they are defined. That's what we call the **typying environment**. Symbolically it'll be represented by Gamma ($\Gamma$).

Based on that, we can define the following rule:

$$
\frac{\Gamma (x) = t}{\Gamma \vdash x : t}
$$

This is an example of an inference rule. In inference rules, if everything on the top of the fraction is true, then the bottom is also true. Another example of an inference rule, but more complex, is the following, where we type an operation between $e_1$ and $e_2$, two values from type **int**:

$$
\frac{\Gamma \vdash e_1 : int \quad \Gamma \vdash e_2 : int}{\Gamma \vdash e_1 + e_2 : int}
$$

### Axioms

Axioms are the base of the inference rules. They are the rules that don't depend on anything else to be true. For example, the following rule is an axiom:

$$
\frac{}{\Gamma \vdash 1 : int}
$$

We can understand axioms as **base cases**. Also, symbolically, as you saw, they are represented by a fraction with nothing on the top. The reason is if there's nothing on the top, so everything on the top is true, this implies that also everything on the bottom is **always** true.

*If those explanations were not clear enough, I recommend you to read [this article](https://mukulrathi.com/create-your-own-programming-language/intro-to-type-checking/) that explains it in a very simple way.*

## Linearity

Linearity pertains to the property of a type system that imposes restrictions on the usage of resources, such as variables and file descriptors. To gain a better understanding of linearity, it is useful to explore what it is not.

### Structural Rules

In proof theory, a structural rule is an inference rule that does not involve any logical connective, but rather operates directly on **judgments** or **sequents**. There are three common structural rules:

- **Weakening**: The hypothesis of a sequent can be extended by adding a new formula to the left or right of the turnstile. For example:

$$
\frac{\Gamma \vdash \varSigma}{\Gamma \vdash \varSigma, A}
$$

> *This rule allows $A$, the resource, to be used zero times.*

- **Contraction**: Equal (or unifiable) members on the same side of a sequent can be replaced by a single member or common instance. For example:

$$
\frac{\Gamma \vdash A, A, \varSigma}{\Gamma \vdash A, \varSigma}
$$

> *This rule allows $A$, the resource, to be used more than once.*

- **Exchange**: Two members on the same side of a sequent can be swapped. For example:

$$
\frac{\Gamma_1, A, \Gamma_2, B, \Gamma_3 \vdash \varSigma}{\Gamma_1, B, \Gamma_2, A, \Gamma_3 \vdash \varSigma}
$$

> *This rule allows $A$ and $B$, the resources, to be used in any order.*

### Substructural Type System

Several type systems have emerged by discarding some structural rules. The most common ones are:

| Type System | Weakening | Contraction | Exchange | Use of resources      |
| ----------- | --------- | ----------- | -------- | --------------------- |
| Ordered     | No        | No          | No       | Exactly once in order |
| Linear      | No        | No          | Yes      | Exactly once          |
| Affine      | Yes       | No          | Yes      | At most once          |

The list still goes on, but we will only need to focus on the **affine** type system.

### Affine Type System

Affine logic is a substructural logic whose proof theory rejects the structural rule of **contraction**. It can also be characterized as **linear logic** with **weakening**.

The reason affine is here is because it's the type system that Rust uses. So, what does it mean? It means that Rust will not allow you to use a  more than once. To gain a better understanding of how Rust utilizes affine logic for resource management, let's delve deeper.

## Rust Ownership

In contrast to other programming languages that employ either garbage collection or manual memory management, Rust offers a third option. Ownership is a fundamental concept in Rust, signifying that data has a single exclusive owner. When data is moved, ownership is transferred.

For example, consider the following code in which we attempt to move a value from one variable to another multiple times:

```rust
fn main() {
  let x = Noob {};
  let y = x;
  let z = x;
}

struct Noob {}
```

If variable `x` had a type that implements the `Copy` trait, this would be permissible. However, since it does not, an error occurs, indicating that `x` was moved to `y` and cannot be used further.

### Borrowing

To address such errors, Rust provides the concept of **borrowing**. Borrowing allows us to temporarily borrow a value from a variable. Consider the revised code that fixes the previous error:

```rust
fn main() {
  let x = Noob {};
  let y = &x;
  let z = &x;
}

struct Noob {}
```

In this case, we are borrowing `x` to `y` and `z`. Borrowing in Rust can present certain challenges, especially when we face **mutable** and **immutable** variables. However, for the purpose of this blog post, we will not be focusing on this matter.

How do these Rust concepts work their magic? They seem to manage memory without the programmer's explicit intervention and without relying on a garbage collector. What implements those concepts is called **Borrow Checker**.

## Borrow Checker

The borrow checker is a compiler feature in Rust that verifies whether the code adheres to the ownership and borrowing rules.

With the borrow checker and the implemented concepts, Rust can ensure memory safety to a great extent (following affine logic, resource usage is **at most once**). The borrow checker automatically deallocates resources that go out of scope.

## Conclusion

Rust is a fascinating language, and the concepts surrounding the implementation of the borrow checker are equally interesting. Likewise, Type Theory presents a captivating field of study. I am enthusiastic about delving further into these topics and sharing new knowledge through future posts.

The purpose of these articles is to facilitate learning and knowledge sharing. I hope you found this post enjoyable and gained new insights. In order to explore more the topics discussed in this post, I recommend to check the references below.

## References

- [From Linear Types to Rust - Eduardo Rafael Stream Recording on Youtube](https://www.youtube.com/watch?v=BWuozpQ_Of8&list=PLF74LNuYVoxpr0xqE1ib0a9C4JgXLNtP8)
- [An Accessible Introduction to Type Theory and Implementing a Type-Checker](https://mukulrathi.com/create-your-own-programming-language/intro-to-type-checking/)
- [Structural Rule](https://en.wikipedia.org/wiki/Structural_rule)
- [Substructural Type System](https://en.wikipedia.org/wiki/Substructural_type_system)
- [Understanding Ownership in Rust](https://blog.logrocket.com/understanding-ownership-in-rust/)