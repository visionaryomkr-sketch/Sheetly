export const trackPageView = () => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "PageView");
  }
};

export const trackViewContent = () => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "ViewContent", {
      content_name: "Sheetly Landing Page",
      content_category: "Business Spreadsheet",
      currency: "INR",
      value: 899,
    });
  }
};

export const trackInitiateCheckout = () => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "InitiateCheckout", {
      content_name: "Sheetly",
      content_category: "Business Spreadsheet",
      currency: "INR",
      value: 899,
      num_items: 1,
    });
  }
};

export const trackPurchase = () => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "Purchase", {
      content_name: "Sheetly",
      content_type: "product",
      content_ids: ["sheetly-bundle-001"],
      currency: "INR",
      value: 899,
      num_items: 1,
    });
  }
};

export const trackLead = () => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "Lead", {
      content_name: "Sheetly Page Engagement",
      currency: "INR",
      value: 899,
    });
  }
};

export const trackFAQSearch = () => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "Search", {
      search_string: "FAQ Viewed",
      content_category: "Sheetly FAQ",
    });
  }
};
