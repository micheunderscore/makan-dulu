import { useState } from "react";

import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { styles } from "./counter.styles";
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
  incrementIfOdd,
  selectCount,
} from "./counterSlice";

export function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch(decrement())}
        >
          -
        </TouchableOpacity>
        <Text style={styles.value}>{count}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch(increment())}
        >
          +
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TextInput
          placeholder="Set increment amount"
          value={incrementAmount}
          onChangeText={(val) => setIncrementAmount(val)}
          style={styles.textbox}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </TouchableOpacity>
      </View>
    </View>
  );
}
