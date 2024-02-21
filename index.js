export const Feedefy = {
  props: {
    projectId: String
  },

  mounted() {
    if (!this.props.projectId) {
      console.error("No projectId was passed to Feedefy Vue, widget will not be initialized");
      return;
    }

    const script = document.createElement("script");

    script.setAttribute("src", `https://app.fedeefy.com/widget.js?id=${this.props.projectId}`);

    script.defer = true;

    document.head.appendChild(script);
  },

  render() {
    return null;
  }
};
