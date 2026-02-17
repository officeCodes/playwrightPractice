import {expect, test} from "@playwright/test";

test("get Animated Heading Text", async ({page})=>{
    await page.goto('https://selectorshub.com/xpath-practice-page/');
    const expectedHeading = "find out";
    console.log(await page.getByText(expectedHeading).innerText());
    console.log(await page.getByText(expectedHeading).textContent());
})
/*
* Perfect 👍 let’s break down how `page.getByText()` works with:

* ✅ Substring
* ✅ Exact string
* ✅ Regular expression

I’ll show clear examples.

---

# 1️⃣ Substring Match (Default Behavior)

By default, `getByText()` does **partial match**.

### Example HTML

```html
<button>Submit Form</button>
```

### Playwright

```ts
await page.getByText("Submit").click();
```

✔ This works
Because `"Submit"` is a substring of `"Submit Form"`.

You don’t need to match full text.

---

# 2️⃣ Exact String Match

If you want to match the full text exactly, use:

```ts
{ exact: true }
```

### Example

```html
<button>Submit</button>
<button>Submit Form</button>
```

### Playwright

```ts
await page.getByText("Submit", { exact: true }).click();
```

✔ Matches only `"Submit"`
❌ Will NOT match `"Submit Form"`

---

# 3️⃣ Regular Expression Match

You can pass a RegExp instead of a string.

### Example 1 — Case insensitive

```ts
await page.getByText(/submit form/i).click();
```

* `/.../` → regex
* `i` → case insensitive

Matches:

* `Submit Form`
* `submit form`
* `SUBMIT FORM`

---

### Example 2 — Starts with

```ts
await page.getByText(/^Submit/).click();
```

Matches:

* `Submit`
* `Submit Form`

But NOT:

* `Click to Submit`

---

### Example 3 — Ends with

```ts
await page.getByText(/Form$/).click();
```

Matches:

* `Submit Form`

---

# 4️⃣ Real Test Example

```ts
test("text matching examples", async ({ page }) => {
  await page.goto("https://example.com");

  // Substring match
  await page.getByText("Login").click();

  // Exact match
  await page.getByText("Login", { exact: true }).click();

  // Regex match
  await page.getByText(/log in/i).click();
});
```

---

# 5️⃣ When To Use What?

| Situation                | Best Option         |
| ------------------------ | ------------------- |
| Text may change slightly | Regex               |
| You want strict match    | `{ exact: true }`   |
| Simple quick match       | Substring (default) |

---

# 6️⃣ Important Interview-Level Detail

`getByText()` matches **visible text only**, and it uses the element’s:

👉 **Accessible text representation**

So hidden elements are ignored.

---

# 🔥 Pro Tip (Better Practice)

If the element is a button, prefer:

```ts
page.getByRole('button', { name: 'Submit' })
```

Instead of:

```ts
page.getByText('Submit')
```

Because role-based locators are more stable and accessibility-friendly.

---

If you want next, I can show:

* How `getByText()` behaves with nested elements
* Difference between `text=` selector and `getByText()`
* How whitespace affects matching

You’re building strong locator knowledge 💪

* */