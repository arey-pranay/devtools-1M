## 🧠 Intuition

The employee structure forms a **tree hierarchy**:

* Each employee can have child employees
* We must search recursively through all descendants

This is a classic **Depth First Search (DFS)** traversal problem.

---

# ⚙️ Approach

At every employee node:

1. Check if current employee matches target `id`
2. If not:

   * recursively search children
3. Return immediately once found
4. If entire subtree fails → return `null`

---

# 🌳 Traversal Type

This uses:

## Depth First Search (DFS)

The algorithm explores one branch fully before moving to the next.

Traversal order:

```text
Root
 ├── Child 1
 │    ├── Grandchild
 │
 └── Child 2
```

Search goes deep first.

---

# ✅ Example

```ts id="l12msa"
const employees = {
  id: 1,
  name: "CEO",
  children: [
    {
      id: 2,
      name: "Manager",
      children: [
        {
          id: 3,
          name: "Developer"
        }
      ]
    }
  ]
};
```

```ts id="m90ska"
findEmployee(employees, 3);
```

### Output

```ts id="p01sla"
{
  id: 3,
  name: "Developer"
}
```

---

# ⏱ Complexity

Let:

* `N` = total employees

## Time Complexity

Worst case:

```text
O(N)
```

Every employee may be visited once.

---

## Space Complexity

```text
O(H)
```

Where `H` is tree height (recursive call stack).

Worst case skewed tree:

```text
O(N)
```

Balanced tree:

```text
O(log N)
```

---

# ⚠️ Important Edge Cases

* ✅ `null` root employee
* ✅ employee without children
* ✅ deeply nested hierarchy
* ✅ employee not found
* ✅ early return optimization when found

---

# 🔥 Interview Concepts Hidden Here

## 1. Tree Traversal

This is not an array problem — it's a **tree recursion** problem.

---

## 2. DFS vs BFS

You used DFS recursively.

Alternative:

* BFS would use a queue.

---

## 3. Early Return Optimization

```ts id="r11ska"
if (temp) return temp;
```

Avoids unnecessary traversal after finding target.

---

## 4. Recursive Search Pattern

Very common pattern:

```ts id="t82msa"
check current
search children
return result
```

Used in:

* DOM traversal
* File systems
* Org hierarchies
* Comments/replies trees
* React fiber concepts

---

# ⚡ 2-Line Revision (Frontend Interviews)

> This problem is a recursive DFS tree traversal where each employee node is checked before searching children.
> Return early once the target node is found to avoid unnecessary traversal.

---

# 🧠 Key Concepts to Remember

* Tree recursion
* DFS traversal
* Base case + recursive case
* Early return optimization
* Hierarchical data structures
* Recursive search patterns
* Difference between DFS and BFS

---

# 🚀 Follow-Up Questions Interviewers Ask

## 1. How would you implement this using BFS?

Using a queue instead of recursion.

---

## 2. What if employees is an array of roots?

You’d iterate roots and DFS each.

---

## 3. What if parent references also existed?

Need cycle detection (`Set`) to avoid infinite recursion.

---

## 4. Can recursion overflow stack?

Yes for very deep trees → iterative DFS/BFS safer.
