import React from "react";
import { Button } from "react-bootstrap";
import Font from 'react-bootstrap'

import "./LoaderButton.css";

export default function LoaderButton({
  isLoading,
  className = "",
  disabled = false,
  ...props
}) {
  return (
    <Button
      className={`LoaderButton ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <i class="far fa-sync-alt"></i>}
      {props.children}
    </Button>
  );
}