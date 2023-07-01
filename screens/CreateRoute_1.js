import React from 'react';
import {
  Blank24px,
  Button,
  ButtonText,
  Input,
  Container,
  CreateRouteLayout,
  Title,
  CreateRouteHeader,
} from '../components/CreateRoute_Shared';
import { useForm } from 'react-hook-form';

const CreateRoute_1 = ({ navigation }) => {
  const { register, handleSubmit, setValue, getValues } = useForm();
  const navigateTo2 = () => {
    const { title } = getValues();
    navigation.navigate('CreateRoute_2', {
      title,
    });
  };
  return (
    <>
      {/* <Image source={Frame} style={{zIndex:999, width:ScreenWidth,height:ScreenHeight,position:'absolute',marginTop:'-24%',opacity:0}}/> */}
      <CreateRouteLayout>
        <Container style={{ marginTop: '50%' }}>
          <Title>여정의 이름을 알려주세요</Title>
          <Blank24px />
          <Input
            placeholderTextColor="#84ADFF"
            autoFocus
            onSubmitEditing={() => navigateTo2()}
            placeholder="제목 입력"
            returnKeyType="next"
            blurOnSubmit={false}
            onChangeText={text => setValue('title', text)}
          />
        </Container>
        <Button onPress={() => navigateTo2()}>
          <ButtonText>다음</ButtonText>
        </Button>
      </CreateRouteLayout>
    </>
  );
};

export default CreateRoute_1;
