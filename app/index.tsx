/**
 * The function `Index` renders a React component with various UI elements like text, images, text
 * input, and scrollable content, including a button that triggers an alert when clicked.
 */
import { ScrollView,Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  function handlePress() {
    alert('button clicked')
  }
  return (
    <SafeAreaView
      style={{
        margin: 20,
      }}>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
        }}>
        <Text>Codnify Technologies</Text>
        <Image
          source={{
            uri: "https://pikaso.cdnpk.net/private/production/2031253203/upload.png?token=exp=1778198400~hmac=78c463a85543db6ba227f6e22e9a56c9f569faef7e8094b85a149bc7877fb313&preview=1",
          }}
          style={{
            width: 50,
            height: 50,
          }}
        />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
        }}>
        <View>
          <TextInput placeholder="Search for service..." />
        </View>
        <View>
          <Image
            source={require("../assets/icons/search.png")}
            style={{
              width: 50,
              height: 50,
            }}
          />
        </View>
      </View>
      <View>
        <Text>Product</Text>
        <View
          style={{
            flexDirection: "column",
          }}>
          <Text>Web Development</Text>
          <Text>Web Design</Text>
          <Text>Custom Software</Text>
          <Text>Consultation</Text>
          <Text>Project Management</Text>
        </View>
      </View>
      <View>
        <Image
          source={require("../assets/images/preview.jpg")}
          style={{
            width: "100%",
            height: 200,
            margin: 10,
            borderRadius: 20,
          }}
        />
      </View>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
          }}>
          <View>
            <Image
              source={{
                uri: "https://plus.unsplash.com/premium_photo-1661963874418-df1110ee39c1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c29mdHdhcmV8ZW58MHx8MHx8fDA%3D",
              }}
              style={{
                width: 150,
                height: 150,
              }}></Image>
            <TouchableOpacity style={{}} onPress={handlePress}>
              <Text>Software</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Image
              source={{
                uri: "https://plus.unsplash.com/premium_photo-1661963874418-df1110ee39c1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c29mdHdhcmV8ZW58MHx8MHx8fDA%3D",
              }}
              style={{
                width: 150,
                height: 150,
              }}></Image>
            <TouchableOpacity style={{}} onPress={handlePress}>
              <Text>Software</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Image
              source={{
                uri: "https://plus.unsplash.com/premium_photo-1661963874418-df1110ee39c1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c29mdHdhcmV8ZW58MHx8MHx8fDA%3D",
              }}
              style={{
                width: 150,
                height: 150,
              }}></Image>
            <TouchableOpacity style={{}} onPress={handlePress}>
              <Text>Software</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
