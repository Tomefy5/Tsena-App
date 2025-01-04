import ShoppingListTab from "./shoppingList/ShoppingListTab";
import ShoppingMenuAction from "./ShoppingMenuAction/ShoppingMenuAction";
import ShoppingDashBoard from "./DashBoardAndControl/ShoppingDashBoard";
import ShoppingAreaControl from "./DashBoardAndControl/ShoppingAreaControl";
import { FormTypeProvider } from "../../contexts/FormTypeProvider";

export default function BodyTsena({ currentListProducts, setProducts }) {
  return (
    <FormTypeProvider>
      <div className="mt-8">
        <div className="grid grid-cols-1 xl:grid-cols-2 my-6 gap-10 lg:gap-3">
          <ShoppingListTab currentListProducts={currentListProducts} />
          <div className="">
            <ShoppingDashBoard />
            <ShoppingAreaControl setProducts={setProducts}/>
          </div>
        </div>
        <ShoppingMenuAction />
      </div>
    </FormTypeProvider>
  );
}
