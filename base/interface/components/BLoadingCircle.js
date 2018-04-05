/*
	BLoadingCircle.js
	BettermentLabs

	Created by Charles Major on 1/12/18. 
    Copyright © 2018 Betterment Labs, LLC. All rights reserved.

Component BLoadingCircle.js
  Description:  loading/progress circle
*/

import React from 'react';
import {Animated, View, InteractionManager} from 'react-native';

import Svg, { Path, Rect } from 'react-native-svg';

let AnimatedCircle = Animated.createAnimatedComponent(Path);

let circleSegments = 120;
let anglePerFrame = 360/(circleSegments);

const defaultCircStrokeWidth = 15;
const defaultCircColor = '#000000';

class BLoadingCircle extends React.Component {
    state = {
        layouts: {
	        width: 100,
	        height: 100,
	        circDia: 100
		},
        circleAngle: 0,
        circMargin: 5,
        circBoxViewBox: "-60 -60 120 120",
        isMounted: true
    }

    componentDidMount() {
        this.setState({isMounted: true}, this.startProgressCircle())
    }

    componentWillUnmount() {
        // this.resetProgressCircle()
        this.setState({isMounted: false})
    }

    setLayoutState = (event) => {
        if (!this.state.isMounted) {return}
		const width = event.nativeEvent.layout.width;
		const height = event.nativeEvent.layout.height;

		var newState = this.state;

		newState.layouts.width = width;
		newState.layouts.height = height;

		newState.layouts.circDia = Math.min(width, height);

		const circBoxSide = newState.layouts.circDia + (this.props.circStrokeWidth || defaultCircStrokeWidth) * 2 + this.state.circMargin;

		newState.circBoxViewBox = -circBoxSide/2 + ' ' + -circBoxSide/2 + ' ' + circBoxSide + ' ' + circBoxSide;
		this.setState({
			newState
		})
	}

    polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
        var angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;
        return {
          x: centerX + (radius * Math.cos(angleInRadians)),
          y: centerY + (radius * Math.sin(angleInRadians))
        };
      }
  
      myCircleSegment = (x, y, radius, startAngle, endAngle) => {
          let start = this.polarToCartesian(x, y, radius, endAngle);
          let end = this.polarToCartesian(x, y, radius, startAngle);
  
          if ((endAngle - startAngle) > 180) {
              let endFirstSeg = this.polarToCartesian(x, y, radius, (startAngle+180));
  
              let line = [
                  "M", start.x, start.y, 
                  "A", radius, radius, 0, 0, 0, endFirstSeg.x, endFirstSeg.y,
                  "A", radius, radius, 0, 0, 0, end.x, end.y
                  ].join(" ");
  
              return(line);
          } else {
              let line = [
                  "M", start.x, start.y, 
                  "A", radius, radius, 0, 0, 0, end.x, end.y
              ].join(" ");
              return(line);       
          }
      }
  
      getMyCurrentCircle = (currentAngle) => {
          return this.myCircleSegment(0,0, this.state.layouts.circDia/2, 180, 180+currentAngle)
      }
  
      advanceProgressCircle = () => {
          if (!this.state.isMounted) {return}
          var newState = this.state;
          if (newState.circleAngle > (360-anglePerFrame)) {
              newState.circleAngle = 0;
              (this.props.progressCircleMadeFullLoop && this.props.progressCircleMadeFullLoop())
          } else {
              if (this.props.isAnimating) {
                newState.circleAngle = newState.circleAngle + anglePerFrame;
                }
        }
        this.setState({
            newState
        })
        requestAnimationFrame(this.advanceProgressCircle);
    }
  
      resetProgressCircle = () => {
        if (!this.state.isMounted) {return}
        var newState = this.state;
          newState.circleAngle = 0;
          newState.progressCircleInProgress = false;
          this.setState({
              newState
          })
      }
  
      startProgressCircle = () => {
        if (!this.state.isMounted) {return}
        this.setState({
              progressCircleInProgress: true
              }, () => {
                  requestAnimationFrame(this.advanceProgressCircle);
              })
      }
  
    render() {
        return(
            <View
                style={{
                    width:'100%',
                    height:'100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                onLayout={(event) => {this.setLayoutState(event)}}
            >
        { (this.state.circleAngle != 0) && 
            <Svg
                pointerEvents="none"
                height={this.state.layouts.circDia}
                width={this.state.layouts.circDia}
                viewBox={this.state.circBoxViewBox}
              >
              <AnimatedCircle
                ref={ ref => this._myCircle = ref }
                d={this.getMyCurrentCircle(this.state.circleAngle)}
                stroke={this.props.circColor || defaultCircColor}
                strokeWidth={this.props.circStrokeWidth || defaultCircStrokeWidth}
                fill="none" 
                strokeLinecap="round"
                />
            </Svg>
        }
        </View>
        )
    }
}

export default BLoadingCircle;