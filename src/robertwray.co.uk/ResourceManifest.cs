using Orchard.UI.Resources;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace robertwraycouk
{
    public class ResourceManifest : IResourceManifestProvider
    {
        public void BuildManifests(ResourceManifestBuilder builder)
        {
            var manifest = builder.Add();
            manifest.DefineScript("CarouselHelper").SetUrl("carousel-helper.js").SetVersion("1.0.0").SetDependencies("jQuery", "Bootstrap");
        }
    }
}