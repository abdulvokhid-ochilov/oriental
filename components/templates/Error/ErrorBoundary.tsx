import Link from "next/link";
import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="h-screen w-full flex flex-col justify-center items-center bg-white">
          <h1 className="text-9xl font-extrabold text-midnight tracking-widest">
            404
          </h1>
          <div className="bg-primary px-2 text-sm rounded rotate-12 absolute text-white">
            Oops, there is an error or Page Not Found!
          </div>
          <button className="mt-5">
            <a className="relative inline-block text-sm font-medium text-midnight group active:text-primary-400 focus:outline-none focus:ring">
              <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-primary group-hover:translate-y-0 group-hover:translate-x-0"></span>

              <span className="relative block px-8 py-3 bg-white border border-current">
                <Link href="/">Go Home</Link>
              </span>
            </a>
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
