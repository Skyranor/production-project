import { Component, ErrorInfo, ReactNode } from 'react';
import { WithTranslation, withTranslation } from 'react-i18next';

interface Props extends WithTranslation {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    const { hasError } = this.state;
    const { children } = this.props;
    const { t } = this.props;

    if (hasError) {
      // You can render any custom fallback UI
      return <h1>{t('Something went wrong')}</h1>;
    }

    return children;
  }
}

// eslint-disable-next-line react-refresh/only-export-components
export default withTranslation('main')(ErrorBoundary);
