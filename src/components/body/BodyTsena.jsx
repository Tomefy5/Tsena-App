import ShoppingListTab from "./shoppingList/ShoppingListTab";
import ShoppingMenuAction from "./ShoppingMenuAction/ShoppingMenuAction";
import ShoppingDashBoard from './DashBoardAndControl/ShoppingDashBoard';
import ShoppingAreaControl from './DashBoardAndControl/ShoppingAreaControl';

export default function BodyTsena() {
  return (
    <div className="mt-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 my-6 gap-10 lg:gap-3">
        <ShoppingListTab />
        <div className="">
          <ShoppingDashBoard/>
          <ShoppingAreaControl/>
        </div>
      </div>
      <ShoppingMenuAction />
    </div>
  );
}
