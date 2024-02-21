export const Feedefy = {
  props: {
    projectId: String,
    required: true,
  },

  mounted() {
    if (this.$props) { // For Vue 2
      projectId = this.$props.projectId;
    } else if (this.props) { // For Vue 3
      projectId = this.props.projectId;
    }

    if (!projectId) {
      console.error("No projectId was passed to Feedefy Vue, widget will not be initialized");
      return;
    }

    const script = document.createElement("script");

    script.setAttribute("src", `https://app.fedeefy.com/widget.js?id=${projectId}`);

    script.defer = true;

    document.head.appendChild(script);
  },

  render() {
    return null;
  }
};
