export const Feedefy = {
  props: {
    projectId: String,
    required: true,
  },

  mounted() {
    let id;
  
    if (this.$props) { // For Vue 2
      id = this.$props.projectId;
    } else if (this.props) { // For Vue 3
      id = this.props.projectId;
    }

    if (!id) {
      console.error("No projectId was passed to Feedefy Vue, widget will not be initialized");
      return;
    }

    const script = document.createElement("script");

    script.setAttribute("src", `https://app.fedeefy.com/widget.js?id=${id}`);

    script.defer = true;

    document.head.appendChild(script);
  },

  render() {
    return null;
  }
};
