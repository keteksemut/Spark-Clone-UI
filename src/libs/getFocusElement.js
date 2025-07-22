/**
 * Get all focusable elements within a container.
 * @param {HTMLElement} root - The container to search within. Defaults to `document.documentElement`.
 * @param {boolean} includeNegativeTabIndex - Whether to include elements with negative tabindex.
 * @returns {HTMLElement[]} - An array of focusable elements.
 */
export default function getFocusableElements(root, includeNegativeTabIndex = false) {
  if (!root) root = document.documentElement;

  const selector = 'a, button, input, textarea, select, details, [tabindex]';
  const allElements = Array.from(root.querySelectorAll(selector));

  return allElements.filter((el) => {
    if (!includeNegativeTabIndex) {
      const tabIndexAttr = el.getAttribute("tabindex");
      if (tabIndexAttr && parseInt(tabIndexAttr) < 0) return false;
    }

    return !el.hasAttribute("disabled");
  });
}
