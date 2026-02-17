import {test} from "@playwright/test";

test('getByLabel - relation validation with input boxes', async ({page})=>{
    await page.goto('https://selectorshub.com/xpath-practice-page/');
    // await page.goto('E:\\self-automation-script\\jsPlaywright\\1\\tests\\index1.html');
    // await page.getByLabel('Email').fill('Hi here is Sangramjit!!!');
    await page.getByLabel('Search:').scrollIntoViewIfNeeded();
    await page.getByLabel('Search:').fill('russia');
    await page.waitForTimeout(4000);
})

/*
*
Excellent 👍 `getByLabel()` is very important for real-world form automation.

Let’s understand it properly.

---

# 🔎 What is `getByLabel()`?

`page.getByLabel()` finds **form controls** (input, textarea, select, etc.)
by their **associated label text**.

It uses accessibility relationships between:

* `<label>` element
* Form control (`<input>`, `<textarea>`, etc.)

---

# 🧠 Why is this powerful?

Because it mimics how:

* Screen readers identify fields
* Real users understand forms

It’s more stable than CSS selectors like `#username`.

---

# 1️⃣ Basic Example (Label wrapping input)

### HTML

```html
<label>
  Username
  <input type="text" />
</label>
```

### Playwright

```ts
await page.getByLabel("Username").fill("john123");
```

✔ It finds the input associated with "Username"

---

# 2️⃣ Label using `for` attribute

### HTML

```html
<label for="email">Email Address</label>
<input id="email" type="email" />
```

### Playwright

```ts
await page.getByLabel("Email Address").fill("john@email.com");
```

Playwright:

* Finds label with text `"Email Address"`
* Reads `for="email"`
* Finds element with `id="email"`

---

# 3️⃣ Partial Match (Default)

```ts
await page.getByLabel("Email").fill("john@email.com");
```

Works if label is:

```
Email Address
```

Because default is substring + case-insensitive.

---

# 4️⃣ Exact Match

```ts
await page.getByLabel("Email", { exact: true }).fill("john@email.com");
```

Matches only exact label text.

---

# 5️⃣ Case Sensitivity

Like `getByText()`:

* String → case-insensitive
* Regex without `i` → case-sensitive

Example:

```ts
await page.getByLabel(/Email/).fill("john@email.com");
```

---

# 6️⃣ Real Form Example

### HTML

```html
<form>
  <label for="user">Username</label>
  <input id="user" type="text">

  <label for="pass">Password</label>
  <input id="pass" type="password">
</form>
```

### Playwright Test

```ts
test("login form", async ({ page }) => {
  await page.goto("https://example.com/login");

  await page.getByLabel("Username").fill("john");
  await page.getByLabel("Password").fill("secret123");
});
```

Very readable and stable.

---

# 🔥 What `getByLabel()` Works With

It supports:

* `<input>`
* `<textarea>`
* `<select>`
* Elements with `aria-labelledby`
* Elements with `aria-label`

---

# 7️⃣ Example with ARIA

### HTML

```html
<input type="text" aria-label="Search" />
```

### Playwright

```ts
await page.getByLabel("Search").fill("Playwright");
```

Works even without `<label>` element.

---

# 🚀 Why It’s Better Than CSS

Instead of:

```ts
await page.locator("#user").fill("john");
```

Better:

```ts
await page.getByLabel("Username").fill("john");
```

Because:

* ID might change
* Label text rarely changes
* More user-focused
* Accessibility-friendly

---

# 🏆 Interview-Level Answer

If asked:

> What is getByLabel?

You say:

> getByLabel locates form controls using their associated label text, either through a `<label>` element or ARIA attributes. It follows accessibility relationships, making tests more stable and user-focused.

---

# 🎯 Quick Comparison

| Locator        | Best For                    |
| -------------- | --------------------------- |
| `getByRole()`  | Buttons, links, UI controls |
| `getByLabel()` | Form fields                 |
| `getByText()`  | Static text                 |
| `locator()`    | Complex custom selectors    |

---

If you want, next I can explain:

* How `aria-labelledby` works internally
* How Playwright calculates accessible names
* Difference between `getByLabel()` and `getByPlaceholder()`

You’re now learning locators the right way 💪

* */