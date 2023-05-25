export const HomeIcon = (props) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.17 18.333h11.666c.919 0 1.667-.747 1.667-1.666v-7.5a.831.831 0 0 0-.245-.59l-6.666-6.666a.832.832 0 0 0-1.179 0L2.747 8.577a.831.831 0 0 0-.244.59v7.5c0 .919.747 1.666 1.666 1.666Zm4.166-1.666V12.5h3.333v4.167H8.336ZM4.169 9.512l5.833-5.834 5.834 5.834v7.155h-2.5V12.5c0-.92-.748-1.667-1.667-1.667H8.336c-.92 0-1.667.748-1.667 1.667v4.167h-2.5V9.512Z"
      fill="currentColor"
    />
  </svg>
);

export const AdminIcon = (props) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.667 2.5H3.333c-.919 0-1.666.748-1.666 1.667v11.666c0 .92.747 1.667 1.666 1.667h13.334c.919 0 1.666-.747 1.666-1.667V4.167c0-.92-.747-1.667-1.666-1.667ZM3.333 15.833V4.167h5.834v11.666H3.333Zm7.5 0V4.167h5.834v11.666h-5.834Z"
      fill="currentColor"
    />
    <path
      d="M12.5 5.833H15V7.5h-2.5V5.833Zm0 3.334H15v1.666h-2.5V9.167Z"
      fill="currentColor"
    />
  </svg>
);

export const SecurityIcon = (props) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.496 5.75a.832.832 0 0 0-.457-.663l-6.667-3.333a.833.833 0 0 0-.745 0L2.96 5.087a.835.835 0 0 0-.456.663c-.009.09-.8 8.973 7.158 12.512a.822.822 0 0 0 .676 0c7.959-3.54 7.167-12.422 7.158-12.512ZM10 16.58V10H4.592a12.894 12.894 0 0 1-.454-3.638L10 3.432V10h5.383c-.632 2.283-2.081 4.982-5.383 6.58Z"
      fill="currentColor"
    />
  </svg>
);

export const ReconIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.667 10h1.666a6.655 6.655 0 0 1 1.948-4.72 6.59 6.59 0 0 1 2.118-1.424 6.766 6.766 0 0 1 5.109-.034 2.074 2.074 0 0 0 2.075 2.011 2.078 2.078 0 0 0 2.084-2.083 2.078 2.078 0 0 0-2.084-2.083c-.574 0-1.093.23-1.469.604a8.448 8.448 0 0 0-6.362.049 8.274 8.274 0 0 0-2.65 1.783 8.267 8.267 0 0 0-1.784 2.649A8.338 8.338 0 0 0 1.667 10Zm14.477 2.602a6.615 6.615 0 0 1-1.425 2.117 6.61 6.61 0 0 1-2.118 1.425 6.766 6.766 0 0 1-5.108.034 2.074 2.074 0 0 0-2.076-2.011 2.078 2.078 0 0 0-2.084 2.083c0 1.155.929 2.083 2.084 2.083.574 0 1.093-.23 1.469-.604a8.304 8.304 0 0 0 3.114.604 8.319 8.319 0 0 0 7.68-5.085A8.327 8.327 0 0 0 18.334 10h-1.666a6.66 6.66 0 0 1-.523 2.602Z"
      fill="currentColor"
    />
    <path
      d="M10 6.218A3.786 3.786 0 0 0 6.218 10 3.786 3.786 0 0 0 10 13.782 3.786 3.786 0 0 0 13.782 10 3.786 3.786 0 0 0 10 6.218Zm0 5.897A2.118 2.118 0 0 1 7.885 10c0-1.166.95-2.115 2.115-2.115 1.166 0 2.115.95 2.115 2.115 0 1.166-.95 2.115-2.115 2.115Z"
      fill="currentColor"
    />
  </svg>
);

export const TransactionIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 3.333h12.5a.833.833 0 0 1 .833.834V10h-1.666V5H5v2.5L.833 4.167 5 .833v2.5Zm10 13.334H2.5a.833.833 0 0 1-.833-.834V10h1.666v5H15v-2.5l4.167 3.333L15 19.167v-2.5Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const ListMenuSidebar = [
  { id: "1", name: "Dashboard Icon", icon: <HomeIcon /> },
  { id: "2", name: "Admin Icon", icon: <AdminIcon /> },
  { id: "3", name: "Security Icon", icon: <SecurityIcon /> },
  { id: "4", name: "Reconciliation Icon", icon: <ReconIcon /> },
  { id: "5", name: "Transaction Icon", icon: <TransactionIcon /> },
];
