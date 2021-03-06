import React, { Component } from 'react';
import { Dimensions, TouchableWithoutFeedback, View } from 'react-native';
import Svg, { G, Line, Path, Rect, Text } from 'react-native-svg';
import { scaleBand, scaleLinear } from 'd3-scale';
import { ticks } from 'd3-array';
import { line } from 'd3-shape';

import { report as data } from 'config/mock';
import {
  SILVER,
  MOUNTAIN_MEADOW,
  VALLEY_GREEN
} from 'config/colors';

import s from './style';

class BarChart extends Component {
  state = {
    barColour: data.map(() => MOUNTAIN_MEADOW)
  }

  toggleHighlight(i) {
    this.setState({
      barColour: [
        ...this.state.barColour.slice(0, i),
        this.state.barColour[i] === MOUNTAIN_MEADOW ? VALLEY_GREEN : MOUNTAIN_MEADOW,
        ...this.state.barColour.slice(i + 1)
      ]
    });
  }

  render() {
    const screen = Dimensions.get('window');
    const margin = {top: 25, right: 25, bottom: 25, left: 25};
    const width = screen.width - margin.left - margin.right;
    const height = 190;
    const x = scaleBand()
      .rangeRound([0, width])
      .padding(0.3)
      .domain(data.map(d => d.letter));
    const maxFrequency = 31;
    const y = scaleLinear()
      .rangeRound([height, 0])
      .domain([0, maxFrequency]);

    const firstLetterX = x(data[0].letter);
    const secondLetterX = x(data[1].letter);
    const lastLetterX = x(data[data.length - 1].letter);
    const labelDx = (secondLetterX - firstLetterX) / 2;

    const bottomAxis = [firstLetterX - labelDx, lastLetterX + labelDx];
    const bottomAxisD = line()
      .x(d => d + labelDx)
      .y(() => 0)(bottomAxis);

    const leftAxis = ticks(0, maxFrequency, 5);
    const leftAxisD = line()
      .x(() => bottomAxis[0] + labelDx)
      .y(d => y(d) - height)(leftAxis);

    const notch = 5;
    const labelDistance = 9;

    const svg = (
      <View style={s.container}>
        <Svg width={screen.width} height={height + 50}>
          <G translate={margin.left + ',' + margin.top}>
            <G translate={'0,' + height}>
              <G key={-1}>
                <Path stroke={SILVER} strokeWidth="2" d={bottomAxisD} key="-1" strokeLinecap="round"/>
                {
                  data.map((d, i) => (
                    <G key={i + 1} translate={x(d.letter) + labelDx + ',0'}>
                      <Line strokeWidth="2" stroke={SILVER} y2={notch} strokeLinecap="round"/>
                      <Text fontFamily="Dosis" fontWeight="600" fill={SILVER} fontSize="13" x={-10} y={labelDistance - 5}>{d.letter}</Text>
                    </G>
                  ))
                }
              </G>
              <G key={-2}>
                <Path stroke={SILVER} strokeWidth="2" d={leftAxisD} key="-1" strokeLinecap="round"/>
                {
                  leftAxis.map((d, i) => (
                    <G key={i + 1} translate={'8,' + (y(d) - height)}>
                      <Line strokeWidth="2" stroke={SILVER} x1={notch} x2={labelDistance} strokeLinecap="round"/>
                      <Text fontFamily="Dosis" fontWeight="600" fill={SILVER} fontSize="13" x={-labelDistance - 5} y={-notch - 7}>{d}</Text>
                    </G>
                  ))
                }
              </G>
              {
                data.map((d, i) => (
                  <TouchableWithoutFeedback key={i} onPress={() => this.toggleHighlight(i)}>
                    <Rect x={x(d.letter) + 7}
                      y={y(d.frequency) - height}
                      width={x.bandwidth()}
                      height={height - y(d.frequency)}
                      fill={this.state.barColour[i]}
                      rx={3}
                      ry={3}>
                    </Rect>
                  </TouchableWithoutFeedback>
                ))
              }
            </G>
          </G>
        </Svg>
      </View>
    );

    return svg;
  }
}

export default BarChart;
