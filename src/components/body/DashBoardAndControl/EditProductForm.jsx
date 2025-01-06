import React, { useContext, useRef } from "react";
import FormTypeContext from "../../../contexts/FormTypeProvider";
import {
  InsertNewProduct,
  SaveEditedProduct,
} from "../../../utils/ProductHandlers";
import { CreateNewCollections, SaveEditedCollection } from "../../../utils/CollectionHandler";
import FormFocusContext from "../../../contexts/FormFocusProvider";

export default function EditProductForm({ setProducts, focusedItemId, setCollections, focusedCollectionId, collections }) {
  const { formType } = useContext(FormTypeContext);
  const { formRef } = useContext(FormFocusContext);
  const formulaireRef = useRef();

  React.useImperativeHandle(formRef, () => ({
    focus: () => {
      formulaireRef.current.focus();
    }
  }))

  return (
    <div className="bg-indigo-300 p-4 rounded-md">
      <h3 id="form-title" className="font-bold text-xl">
        {formType === "editProd"
          ? "Edit Selected Product "
          : formType === "createProd"
          ? "Create New Product "
          : formType === "editCollection" 
          ? "Edit Selected Collection"
          : formType === "createCollection" 
          ? "Create New Collection"
          : "Edit Selected Product  "}
      </h3>

      {(formType === "editProd" || formType === "createProd") && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="my-4 flex flex-col gap-5 md:gap-3"
        >
          <div className="flex flex-col md:flex-row gap-1 md:gap-8">
            <label className="font-medium text-sm lg:text-base">Product</label>
            <input
              id="product-name-field"
              type="text"
              className="h-6 rounded px-2 py-1"
              ref={formulaireRef}
              required
            />
          </div>
          <div className="flex flex-col md:flex-row gap-1 md:gap-8">
            <label className="font-medium text-sm lg:text-base">
              Collection
            </label>
            <select
              name="product-type"
              id="product-collection-field"
              className="px-2 py-1 rounded font-medium"
            >
              <option value={null}></option>
              {collections.map((collection, index) => (
                <option key={index} value={(collection.name).toLowerCase()}>
                  {collection.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col md:flex-row gap-1 md:gap-8">
            <label className="font-medium text-sm lg:text-base">Quantity</label>
            <input
              type="number"
              className="h-6 rounded px-2 py-1"
              id="product-quantity-field"
              required
            />
          </div>
          <div className="flex flex-col md:flex-row gap-1 md:gap-8">
            <label className="font-medium text-sm lg:text-base">
              Unit Price
            </label>
            <input
              type="number"
              className="h-6 rounded px-2 py-1"
              id="product-unit-price-field"
              required
            />
          </div>
          <div className="mt-5">
            <button
              id="form-btn"
              className="bg-blue-500 hover:bg-blue-600 text-white hover:text-gray-100 transition-colors duration-200 px-4 py-2 rounded-md"
              onClick={
                formType === "createProd"
                  ? () => {
                      InsertNewProduct(formType, setProducts);
                    }
                  : formType === "editProd"
                  ? () => {
                      SaveEditedProduct(focusedItemId, setProducts);
                    }
                  : undefined
              }
            >
              <span className="font-medium">
                {formType === "editProd"
                  ? "Save Changes"
                  : formType === "createProd"
                  ? "Create"
                  : "Autres"}
              </span>
            </button>
          </div>
        </form>
      )}
      {(formType === "createCollection" || formType === "editCollection") && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="my-4 flex flex-col gap-5 md:gap-3"
        >
          <div className="flex flex-col md:flex-row gap-1 md:gap-8">
            <label className="font-medium text-sm lg:text-base">
              Collection
            </label>
            <input
              id="collection-name-field"
              type="text"
              className="h-6 rounded px-2 py-1"
              required
              ref={formulaireRef}
            />
          </div>
          <div className="mt-5">
            <button
              id="form-btn"
              className="bg-blue-500 hover:bg-blue-600 text-white hover:text-gray-100 transition-colors duration-200 px-4 py-2 rounded-md"
              onClick={
                formType === "createCollection"
                  ? () => {
                    CreateNewCollections(setCollections);
                    }
                  : formType === "editCollection"
                  ? () => {
                    SaveEditedCollection(focusedCollectionId, setCollections);
                    }
                  : undefined
              }
            >
              <span className="font-medium">
                {formType === "editCollection"
                  ? "Save Changes"
                  : formType === "createCollection"
                  ? "Create"
                  : "Autres"}
              </span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
