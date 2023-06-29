import { styled } from 'styled-components/native';

export const CreateRouteLayout = styled.SafeAreaView`
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-color: white;
    width:100%;
    flex:1;
    /* background-color: chartreuse; */
`
export const Container = styled.SafeAreaView`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 90%;
`
export const Title = styled.Text`
font-size: 20px;
font-weight: bold;
color: #0351EA;
margin-bottom: 12px;
`
export const ButtonText = styled.Text`
font-size: 16px;
font-weight: 400;
color: white;
font-weight: 800;

`
export const Button = styled.TouchableOpacity`
  background-color: #0351EA;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 46px;
  border-radius: 22px;
  width: 46%;
`
const TextInput = styled.TextInput`
  background-color: rgba(255, 255, 255, 0.15);
  padding: 15px 7px;
  border-radius: 4px;
  background-color: #EEF4FF;
  border-radius: 10px;
  width:100%;
`;

export const Input = ({ innerRef, lastOne, ...data }) => {
  return (
    <TextInput
      ref={innerRef}
      lastOne={lastOne}
      placeholderTextColor='#84ADFF'
      {...data}
    />
  );
};



export const regions = [
  {name:"강동구", id:1},
  {name:"강남구", id:2},
  {name:"강북구", id:3},
  {name:"강서구", id:4},
  {name:"관악구", id:5},
  {name:"광진구", id:6},
  {name:"구로구", id:7},    
  {name:"금천구", id:8},
  {name:"노원구", id:9},
  {name:"도봉구", id:10},
  {name:"동대문구", id:11},
  {name:"동작구", id:12},
  {name:"마포구", id:13},
  {name:"서대문구", id:14},
  {name:"서초구", id:15},
  {name:"성동구", id:16},
  {name:"성북구", id:17},
  {name:"송파구", id:18},
  {name:"양천구", id:19},
  {name:"영등포구", id:20},
  {name:"용산구", id:21},
  {name:"은평구", id:22},
  {name:"종로구", id:23},
  {name:"중구",  id:24},    
  {name:"중랑구", id:25}
]