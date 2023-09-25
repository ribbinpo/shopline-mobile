import { View, Text, Image } from "react-native";
import { Badge } from "../base/Badge";
import { useMemo } from "react";
import Card from "../base/Card";

interface IProductCard {
  product: {
    imagePath?: string;
    name: string;
    types?: string[];
    shortDetail?: string;
    tags?: string[];
    price: number;
    discountPercent?: `${number}%`;
    discountedPrice?: number;
    currency: string;
  };
}

export default function ProductCard({ product }: IProductCard) {
  const tagMessage = useMemo(() => {
    return product.tags?.join(", ");
  }, [product.tags]);

  return (
    <Card>
      <Card.Body>
        <Image
          resizeMode="cover"
          source={require("../../assets/images/productDefaultPreview.png")}
          style={{
            width: "100%",
            height: 150,
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
          }}
        />
        <View style={{ paddingHorizontal: 10, marginTop: 10, gap: 10 }}>
          <View>
            <Text style={{ fontSize: 16 }}>{product.name}</Text>
          </View>
          <View style={{ flexDirection: "row", gap: 5 }}>
            {product.types &&
              product.types.map((type, key) => (
                <Badge key={key} title={type} />
              ))}
          </View>
        </View>
      </Card.Body>
      <Card.Footer>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 12 }}>{tagMessage}</Text>
          <Text
            style={{ color: "green", fontWeight: "500" }}
          >{`${product.currency}${product.price}`}</Text>
        </View>
      </Card.Footer>
    </Card>
  );
}
