import ShoppingListTab from "./shoppingList/ShoppingListTab";
import ShoppingMenuAction from "./ShoppingMenuAction/ShoppingMenuAction";
import ShoppingDashBoard from "./DashBoardAndControl/ShoppingDashBoard";
import ShoppingAreaControl from "./DashBoardAndControl/ShoppingAreaControl";
import { FormTypeProvider } from "../../contexts/FormTypeProvider";
import { CurrencyProvider } from "../../contexts/CurrencyProvider";
import { FormFocusProvider } from "../../contexts/FormFocusProvider";

export default function BodyTsena({
  currentListProducts,
  setProducts,
  setFocusedItem,
  focusedItemId,
  setCollections,
  collections,
  focusedCollectionId,
  setFocusedCollectionsId,
}) {
  return (
    <FormTypeProvider>
      <CurrencyProvider>
        <FormFocusProvider>
          <div className="mt-8">
            <div className="grid grid-cols-1 xl:grid-cols-2 my-6 gap-10 lg:gap-3">
              <ShoppingListTab
                currentListProducts={currentListProducts}
                setFocusedItem={setFocusedItem}
                setProducts={setProducts}
                setCollections={setCollections}
                collections={collections}
                setFocusedCollectionsId={setFocusedCollectionsId}
              />
              <div className="">
                <ShoppingDashBoard currentListProducts={currentListProducts} />
                <ShoppingAreaControl
                  currentListProducts={currentListProducts}
                  setProducts={setProducts}
                  focusedItemId={focusedItemId}
                  setCollections={setCollections}
                  focusedCollectionId={focusedCollectionId}
                  collections={collections}
                />
              </div>
            </div>
            <ShoppingMenuAction />
          </div>
        </FormFocusProvider>
      </CurrencyProvider>
    </FormTypeProvider>
  );
}
