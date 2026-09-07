// @vitest-environment jsdom
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { cleanup, fireEvent, render, waitFor } from "@testing-library/react";
import { createMemoryHistory, createRootRoute, createRoute, createRouter, Link, RouterProvider } from "@tanstack/react-router";
import { afterEach, expect, test } from "vitest";
import { Route } from "../src/routes/resume";

function makeRouter(isServer = false) {
  const root = createRootRoute();
  const home = createRoute({
    getParentRoute: () => root,
    path: "/",
    component: () => createElement(Link, { to: "/resume", children: "Open resume" }),
  });
  const resume = createRoute({
    getParentRoute: () => root,
    path: "/resume",
    component: Route.options.component,
  });
  return createRouter({
    routeTree: root.addChildren([home, resume]),
    history: createMemoryHistory({ initialEntries: ["/resume"] }),
    isServer,
  });
}

afterEach(cleanup);

test("resume serves experience, a home link and PDF without client JavaScript", async () => {
  const router = makeRouter(true);
  await router.load();
  const html = renderToStaticMarkup(createElement(RouterProvider, { router }));
  expect(html).toContain("Kizora Software");
  expect(html).toContain('href="/resume-sanket-patrikar.pdf"');
  expect(html).toContain('href="/"');
  expect(html).toContain("Education");
});

test("resume back link navigates client-side and supports repeat visits", async () => {
  const router = makeRouter();
  await router.load();
  const page = render(createElement(RouterProvider, { router }));
  for (let visit = 0; visit < 2; visit++) {
    await waitFor(() => expect(page.getByRole("link", { name: "Back to home" })).toBeTruthy());
    const defaultAllowed = fireEvent.click(page.getByRole("link", { name: "Back to home" }), { button: 0 });
    expect(defaultAllowed).toBe(false);
    await waitFor(() => expect(router.state.location.pathname).toBe("/"));
    fireEvent.click(page.getByRole("link", { name: "Open resume" }), { button: 0 });
    await waitFor(() => expect(router.state.location.pathname).toBe("/resume"));
  }
});
