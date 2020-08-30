(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{380:function(t,e,i){"use strict";i.r(e);var a=i(42),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"前言"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),i("p",[t._v("spring data jpa提供了Java persist API支持，简化了访问jpa数据源的功能开发。")]),t._v(" "),i("ul",[i("li",[t._v("什么是JPA?"),i("br"),t._v("\nJPA全称Java持久化访问接口定义，它的作用在于统一了持久层框架的行为，消除不同持久层框架操作的差异性。")])]),t._v(" "),i("h1",{attrs:{id:"使用指导"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#使用指导"}},[t._v("#")]),t._v(" 使用指导")]),t._v(" "),i("h2",{attrs:{id:"数据保存"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#数据保存"}},[t._v("#")]),t._v(" 数据保存")]),t._v(" "),i("p",[t._v("spring data jpa通过CrudRepository.save(…)方法统一了新增和更新的操作。spring data jpa的save是如何区分新增和更新呢，是通过实体的isNew方法，默认情况是通过id值查询实体是否存在，如果存在调用entityManager.merge(…)进行数据更新，如果不存在调用entityManager.persist(…)进行数据新增。")]),t._v(" "),i("h3",{attrs:{id:"使用举例"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#使用举例"}},[t._v("#")]),t._v(" 使用举例")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("public interface UserRepository extends Repository&lt;User, Long&gt; {\n\t\n\tUser save(User user);\n}\n")])])]),i("h2",{attrs:{id:"数据查询"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#数据查询"}},[t._v("#")]),t._v(" 数据查询")]),t._v(" "),i("p",[t._v("spring data jpa数据查询提供了多种方式，这里我们只介绍YogurtCat平台使用的方式。")]),t._v(" "),i("ul",[i("li",[t._v("通过方法生成简单查询")]),t._v(" "),i("li",[t._v("通过Specifications生产复杂查询")])]),t._v(" "),i("h3",{attrs:{id:"通过方法生成简单查询"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#通过方法生成简单查询"}},[t._v("#")]),t._v(" 通过方法生成简单查询")]),t._v(" "),i("p",[t._v("方法名查询是spring data jpa提供的一个非常方便的特性。在加载领域对象的时候通过扫描方法名来生成对应的查询语句。"),i("br"),t._v("\n方法名由操作，主题以及断言三个部分组成。例如findUserByLastnameAndFirstname方法，find是操作，User是主题，LastnameAndFirstname是断言。各个部分的作用如下：")]),t._v(" "),i("ul",[i("li",[t._v("操作"),i("br"),t._v("\n操作包括find,read,get,query以及count。前面四个操作指的是对象查询，最后的count指的是对象数量的查询。")]),t._v(" "),i("li",[t._v("主题"),i("br"),t._v("\n主题就是当前领域对象名，因为可以通过上下文推导，所以主题名一般可以不写。只有一种情况必须写主题那就是与distinct组合去重查询的时候必须携带主题名。")]),t._v(" "),i("li",[t._v("断言"),i("br"),t._v("\n断言就是过滤条件，过来查询结果。")])]),t._v(" "),i("h4",{attrs:{id:"断言关键字及等价的效果见下表"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#断言关键字及等价的效果见下表"}},[t._v("#")]),t._v(" 断言关键字及等价的效果见下表")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("关键词")]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[t._v("示例")]),t._v(" "),i("th",{staticStyle:{"text-align":"right"}},[t._v("等价效果")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("And")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("findByLastnameAndFirstname")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("… where x.lastname = ?1 and x.firstname = ?2")])]),t._v(" "),i("tr",[i("td",[t._v("Or")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("findByLastnameOrFirstname")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("… where x.lastname = ?1 or x.firstname = ?2")])]),t._v(" "),i("tr",[i("td",[t._v("Is,Equals")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("findByFirstname,findByFirstnameIs,findByFirstnameEquals")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("… where x.firstname = ?1")])]),t._v(" "),i("tr",[i("td",[t._v("Between")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("findByStartDateBetween")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("… where x.startDate between ?1 and ?2")])]),t._v(" "),i("tr",[i("td",[t._v("LessThan")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("findByAgeLessThan")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("… where x.age < ?1")])]),t._v(" "),i("tr",[i("td",[t._v("LessThanEqual")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("findByAgeLessThanEqual")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("… where x.age <= ?1")])]),t._v(" "),i("tr",[i("td",[t._v("GreaterThan")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("findByAgeGreaterThan")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("… where x.age > ?1")])]),t._v(" "),i("tr",[i("td",[t._v("GreaterThanEqual")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("findByAgeGreaterThanEqual")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("… where x.age >= ?1")])]),t._v(" "),i("tr",[i("td",[t._v("After")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("findByStartDateAfter")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("… where x.startDate > ?1")])]),t._v(" "),i("tr",[i("td",[t._v("Before")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("findByStartDateBefore")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("… where x.startDate < ?1")])]),t._v(" "),i("tr",[i("td",[t._v("IsNull")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("findByAgeIsNull")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("… where x.age is null")])]),t._v(" "),i("tr",[i("td",[t._v("IsNotNull,NotNull")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("findByAge(Is)NotNull")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("… where x.age not null")])]),t._v(" "),i("tr",[i("td",[t._v("Like")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("findByFirstnameLike")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("… where x.firstname like ?1")])]),t._v(" "),i("tr",[i("td",[t._v("NotLike")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("findByFirstnameNotLike")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("… where x.firstname not like ?1")])]),t._v(" "),i("tr",[i("td",[t._v("StartingWith")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("findByFirstnameStartingWith")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("… where x.firstname like ?1 (parameter bound with appended %)")])]),t._v(" "),i("tr",[i("td",[t._v("EndingWith")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("findByFirstnameEndingWith")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("… where x.firstname like ?1 (parameter bound with prepended %)")])]),t._v(" "),i("tr",[i("td",[t._v("Containing")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("findByFirstnameContaining")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("… where x.firstname like ?1 (parameter bound wrapped in %)")])]),t._v(" "),i("tr",[i("td",[t._v("OrderBy")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("findByAgeOrderByLastnameDesc")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("… where x.age = ?1 order by x.lastname desc")])]),t._v(" "),i("tr",[i("td",[t._v("Not")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("findByLastnameNot")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("… where x.lastname <> ?1")])]),t._v(" "),i("tr",[i("td",[t._v("In")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("findByAgeIn(Collection<Age> ages)")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("… where x.age in ?1")])]),t._v(" "),i("tr",[i("td",[t._v("NotIn")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("findByAgeNotIn(Collection<Age> ages)")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("… where x.age not in ?1")])]),t._v(" "),i("tr",[i("td",[t._v("True")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("findByActiveTrue()")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("… where x.active = true")])]),t._v(" "),i("tr",[i("td",[t._v("False")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("findByActiveFalse()")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("… where x.active = false")])]),t._v(" "),i("tr",[i("td",[t._v("IgnoreCase")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("findByFirstnameIgnoreCase")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("… where UPPER(x.firstame) = UPPER(?1)")])])])]),t._v(" "),i("h3",{attrs:{id:"使用举例-2"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#使用举例-2"}},[t._v("#")]),t._v(" 使用举例")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("public interface UserRepository extends Repository&lt;User, Long&gt; {\n\t\n\tUser findByUsername(String username);\n}\n")])])]),i("h3",{attrs:{id:"通过specifications生产复杂查询"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#通过specifications生产复杂查询"}},[t._v("#")]),t._v(" 通过Specifications生产复杂查询")]),t._v(" "),i("p",[t._v("通过方法名自动生成查询虽然是一个便利的方法，但是如果查询条件复杂的话，整个方法就会特别的复杂，这个时候就需要使用Specifications生产复杂查询。"),i("br"),t._v("\nSpecifications实现步骤如下：")]),t._v(" "),i("ol",[i("li",[t._v("继承JpaSpecificationExecutor接口")]),t._v(" "),i("li",[t._v("创建Specification实现类，构建查询条件"),i("br"),t._v("\nSpecifications能够支持复杂查询就在于Specification接口，本节将会重点讲解这部分。")])]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("public interface Specification&lt;T&gt; extends Serializable {\n\n\tstatic &lt;T&gt; Specification&lt;T&gt; not(Specification&lt;T&gt; spec) {\n\t\treturn Specifications.negated(spec);\n\t}\n\n\tstatic &lt;T&gt; Specification&lt;T&gt; where(Specification&lt;T&gt; spec) {\n\t\treturn Specifications.where(spec);\n\t}\n\n\tdefault Specification&lt;T&gt; and(Specification&lt;T&gt; other) {\n\t\treturn Specifications.composed(this, other, AND);\n\t}\n\n\tdefault Specification&lt;T&gt; or(Specification&lt;T&gt; other) {\n\t\treturn Specifications.composed(this, other, OR);\n\t}\n\n\t@Nullable\n\tPredicate toPredicate(Root&lt;T&gt; root, CriteriaQuery&lt;?&gt; query, CriteriaBuilder criteriaBuilder);\n}\n")])])]),i("p",[t._v("上面是Specification接口的代码描述，Specification有五个方法下面我们将会讲解每个方法的作用以及使用场景。")]),t._v(" "),i("ul",[i("li",[t._v("static <T> Specification<T> not(Specification<T> spec)"),i("br"),t._v("\n不满足spec参数指定的条件构建，类似于！=spec的作用，使用示例如下")])]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("Specification<Object> specification = Specification\n\t\t\t\t.not(serializableSpec.and(serializableSpec).or(serializableSpec));\n")])])]),i("ul",[i("li",[t._v("static <T> Specification<T> where(Specification<T> spec)\n提供了一个创建Specification对象的工厂方法")])]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("Specification<Object> specification = Specification.where(null);;\n")])])]),i("ul",[i("li",[t._v("default Specification<T> and(Specification<T> other)"),i("br"),t._v("\n将other条件添加到当前对象中，是一个与关系，两个条件都要满足。")])]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("Specification<Object> specification = where(null);\n\t\tspecification = specification.and(spec);\n")])])]),i("ul",[i("li",[t._v("default Specification<T> or(Specification<T> other)"),i("br"),t._v("\n将other条件添加到当前对象中，是一个或关系，两个条件满足一个就可以。")])]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("Specification<Object> specification = where(null);\n\t\tspecification = specification.or(spec);\n")])])]),i("ul",[i("li",[t._v("Predicate toPredicate(Root<T> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder)"),i("br"),t._v("\n使用root和query构建查询条件")])]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("Specification<Object> specification = where(null);\n\t\tspecification = specification.or(spec);\n")])])]),i("ol",[i("li",[t._v("使用步骤2.构建的条件，进行复杂查询")])]),t._v(" "),i("h3",{attrs:{id:"使用举例-3"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#使用举例-3"}},[t._v("#")]),t._v(" 使用举例")]),t._v(" "),i("ul",[i("li",[t._v("继承JpaSpecificationExecutor接口")])]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("public interface UserRepository extends Repository&lt;User, Long&gt;, JpaSpecificationExecutor&lt;User&gt; {\n\t\n}\n")])])]),i("ul",[i("li",[t._v("创建Specification实现类，构建查询条件")])]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v('public class UserSpec implements Specification&lt;User&gt; {\n\t\n\tprivate static final long serialVersionUID = 1L;\n\t\n\t/**\n\t * 条件\n\t */\n\t@Builder.Default\n\tprivate Optional&lt;UserVo&gt; condition = Optional.empty();\n\n\t@Override\n\tpublic Predicate toPredicate(Root&lt;User&gt; root, CriteriaQuery&lt;?&gt; query, CriteriaBuilder criteriaBuilder) {\n\t\tList&lt;Predicate&gt; predicates = new ArrayList&lt;Predicate&gt;();\n\t\tif(condition.isPresent()) {\n\t\t\tif(!StringUtil.isNullOrEmpty(condition.get().getUsername())) {\n\t\t\t\tpredicates.add(criteriaBuilder.equal(root.get("username"), condition.get().getUsername()));\n\t\t\t}\n\t\t\tif(!StringUtil.isNullOrEmpty(condition.get().getPassword())) {\n\t\t\t\tpredicates.add(criteriaBuilder.equal(root.get("password"), condition.get().getPassword()));\n\t\t\t}\n\t\t\tif(!StringUtil.isNullOrEmpty(condition.get().getToken())) {\n\t\t\t\tpredicates.add(criteriaBuilder.equal(root.get("token"), condition.get().getToken()));\n\t\t\t}\n\t\t\treturn criteriaBuilder.and(predicates.toArray(new Predicate[predicates.size()]));\n\t\t}else {\n\t\t\treturn null;\n\t\t}\n\t}\n\n}\n')])])]),i("ul",[i("li",[t._v("复杂查询")])]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("public UserVo findUser(String name, String password) {\n    Optional&lt;UserVo&gt; condition = Optional.ofNullable(UserVo.builder().username(name).password(password).build());\n    Optional&lt;User&gt; user = userRepository.findOne(UserSpec.builder().condition(condition).build());\n    if (!user.isPresent()) {\n        return null;\n    }\n    UserVo target = new UserVo();\n    BeanUtils.copyProperties(user.get(), target);\n    return target;\n}\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);