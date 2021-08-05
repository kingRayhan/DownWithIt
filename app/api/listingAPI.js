import api from "./api";

const endpoint = "listings";

const getListings = () => api.get(endpoint);

const addListing = (listing, onUploadProgress) => {
  const form = new FormData();
  form.append("title", listing.title);
  form.append("price", listing.price);
  form.append("categoryId", listing.category.value);
  form.append("description", listing.description);

  listing.images.forEach((image, index) => {
    form.append("images", {
      name: "image" + index,
      type: "image/jpeg",
      uri: image,
    });
  });

  if (listing.location) {
    form.append("location", JSON.stringify(listing.location));
  }

  return api.post(endpoint, form, {
    onUploadProgress: (progress) => onUploadProgress(progress),
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export default {
  getListings,
  addListing,
};
