import { DimensionValue, FlatList, View } from "react-native";
import ProductCard from "./ProductCard";

interface IProductList {
  productList: {
    imagePath?: string;
    name: string;
    types?: string[];
    shortDetail?: string;
    tags?: string[];
    price: number;
    discountPercent?: `${number}%`;
    discountedPrice?: number;
    currency: string;
  }[];
  numColumns?: number;
  paddingItem?: DimensionValue;
};

export default function ProductList({ productList, numColumns = 2, paddingItem = 3 }: IProductList) {
  return (
    <FlatList
      data={productList}
      renderItem={({ item }) => (
        <View style={{ width: `${100 / numColumns}%`, padding: paddingItem, height: 300 }}>
          <ProductCard product={item} />
        </View>
      )}
      keyExtractor={(item) => item.name}
      numColumns={numColumns}
    />
  );
}
