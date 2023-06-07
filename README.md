# ups-clone-yt-stepzen

## Technique

### React-Native

### React Navigation

- Nested Navigation
    - Tab Navigation
    - Modal Navigation
    - Page Navigation


### StepZen
To make an awesome graphQL API
we use restfulAPI endpoint
```bash
npm install -g stepzen
```

### Firebase
use realtime database
(start in test mode)
paste the sample_data.json. to import the data structure and data
![image](https://github.com/digleg/ups-clone-yt-stepzen/assets/24401897/1951e51b-aa70-42f5-9145-ab1ba405622f)

    
### Expo
```bash
npm i -g expo-cli
npx create-expo-app -t expo-template-blank-typescript
expo start
```

### Tailwind
```bash
// https://github.com/vadimdemedes/tailwind-rn
npm install tailwind-rn
npx setup-tailwind-rn
// next follow the settings show in the cmd
```

### TypeScript customized type
```typescript
export type RootStackParamList = {
  Main: undefined;
  MyModal: { userId: string; name: string };
  Order: { order: any }; // will replace it later
};
const RootStack = createNativeStackNavigator<RootStackParamList>();
```

```
export type TabStackParamList = {
  Customers: undefined;
  Orders: undefined;
};
const Tab = createBottomTabNavigator<TabStackParamList>();
```

