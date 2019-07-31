import * as React from "react";
import clsx from 'clsx';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import style from "./Parallax.style";
type Style = ReturnType<typeof style>;

type Props = WithStyles<Style> & {
  image: string,
  style?: object,
};

class Parallax extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    var windowScrollTop = window.pageYOffset / 3;
    this.state = {
      transform: "translate3d(0," + windowScrollTop + "px,0)"
    };
  }
  componentDidMount() {
    var windowScrollTop = window.pageYOffset / 3;
    this.setState({
      transform: "translate3d(0," + windowScrollTop + "px,0)"
    });
    window.addEventListener("scroll", this.resetTransform);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.resetTransform);
  }
  resetTransform = () => {
    var windowScrollTop = window.pageYOffset / 3;
    this.setState({
      transform: "translate3d(0," + windowScrollTop + "px,0)"
    });
  };
  render() {
    const {
      classes,
      children,
      style,
      image,
    } = this.props;

    return (
      <div
        className={clsx(classes.parallax, classes.small)}
        style={{
          ...style,
          backgroundImage: "url(" + image + ")",
          ...this.state
        }}
      >
        {children}
      </div>
    );
  }
}

export default withStyles(style)(Parallax);
