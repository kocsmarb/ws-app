import * as React from 'react';
import { createStyles, Theme } from '@material-ui/core/styles';
import AppBar, {AppBarProps} from '@material-ui/core/AppBar';
import { withStyles, WithStyles } from '@material-ui/core/styles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    transparent: {
      backgroundColor: "transparent !important",
      boxShadow: "none",
      color: "primary"
    },
  });


type Props = AppBarProps & WithStyles<typeof styles> & {
  transparentHeight: number,
};

class AppBarWithTransition extends React.Component<Props>{
  private ref: React.RefObject<HTMLDivElement> = React.createRef();

  static defaultProps: any = {
    transparentHeight: 300,
  };

  headerColorChange = () => {
    const { classes, transparentHeight } = this.props;
    const windowsScrollTop = window.pageYOffset;
    if(!this.ref.current) return;
    if (windowsScrollTop > transparentHeight) {
      this.ref.current.classList.remove(classes.transparent);
    } else {
      this.ref.current.classList.add(classes.transparent);
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.headerColorChange);
  }

  componentWillUnmount() {
    window.addEventListener("scroll", this.headerColorChange);
  }
  
  render(){
    const { transparentHeight, classes, ...rest } = this.props;
    return (
      <AppBar {...rest} ref={this.ref} className={classes.transparent}>
        {this.props.children}
      </AppBar>
    );
  }
}

export default withStyles(styles)(AppBarWithTransition);
